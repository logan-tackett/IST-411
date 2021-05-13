import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React, { Component } from "react";
import {
 Jumbotron,
 Form,
 Button,
 Container,
 Accordion,
 Card
} from "react-bootstrap";


class App extends Component{
  constructor(){
    super()

    this.state = {
      word: "",
      definition: "",
      partOfSpeech: "",
      example: "",
      synonym: "",
    }

    }//constructor

    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]:val});
    }

    async getWords(){ //main function that calls API
      var apiString = "https://api.dictionaryapi.dev/api/v2/entries"; //base API call 
  
      var language = document.getElementById("language").value; //variable to hold value of selected language
      var theWord = document.getElementById("theWord").value; //variable to hold entered word
      apiString = apiString + "/" + language + "/" + theWord; //putting together the base API string, the selected language, and the entered word
    
      var response = await fetch(apiString);
      var jsonData = await response.json();

      //creating empty variables/clearing out the variables if previously used
      document.getElementById("newDefinition").innerHTML = ""; 
      document.getElementById("newPartOfSpeech").innerHTML = "";
      document.getElementById("newExample").innerHTML = "";
      document.getElementById("newSynonym").innerHTML = "";
   
      //going through the pulled API data, finding the appropriate info and putting it into the proper variables
      document.getElementById("newDefinition").innerHTML += jsonData[0].meanings[0].definitions[0].definition;
      document.getElementById("newPartOfSpeech").innerHTML += jsonData[0].meanings[0].partOfSpeech;
      document.getElementById("newExample").innerHTML += jsonData[0].meanings[0].definitions[0].example;
      document.getElementById("newSynonym").innerHTML += jsonData[0].meanings[0].definitions[0].synonyms[0];
  
  }

   //start of main react-bootstrap
  render(){
  return (
    <Container>
    <br></br>

    {/*First react-bootstrap component used is used as a large title component that is able to hold any other components*/}
    <Jumbotron>
      <h1>Twelve Language Dictionary!</h1>
      <p>
        This is a free to use dictionary search engine that allows you to search nearly any word in any of our twelve supported languages.
      </p>
      <p>
        <Button variant="primary" href="https://dictionaryapi.dev/">Learn more</Button> {/*Link to API information page*/}
      </p>
    </Jumbotron>
    
    {/*Form component that encompasses both the word entry and language selection*/}
     <Form>

       {/*Word Entry form component*/}
        <Form.Group controlId="theWord">
          <Form.Label>Enter a Word:</Form.Label>
            <Form.Control type="text" id="theWord" name="theWord" placeholder="Any Word, Any Language" onChange={this.myChangeHandler}/>
            <Form.Text className="text-muted">
              As long as it's one of the twelve languages we support.
            </Form.Text>
        </Form.Group>

        {/*Language selection form component*/}
        <Form.Group controlId="formLanguage">
          <Form.Label for="language">Select a Lanaguage:</Form.Label>
            <Form.Control id="language" name="language" as="select" onChange={this.myChangeHandler}>
                <option disabled selected value> -- select an option -- </option>
                <option value="ar"> Arabic </option>
                <option value="pt-BR">Portuguese (BR)</option>
                <option value="en_US">English (US)</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="hi">Hindi</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="ko">Korean</option>
                <option value="ru">Russian</option>
                <option value="es">Spanish</option>
                <option value="tr">Turkish</option>
            </Form.Control>
        </Form.Group>

        {/*Button to submit that calls the getWords function*/}
        <Button className="secondary" onClick={this.getWords} block>
          Submit
        </Button>
      </Form>
      <br></br><br></br>

      {/*This accordion component is where all of the data is shown, by default each area is filled with "No Data"
      Each of these components can be selected and it will be expanded to reveal information*/}
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
           Definition
         </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body id="newDefinition">No Data</Card.Body>
           </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
           Part of Speech
          </Accordion.Toggle>
           <Accordion.Collapse eventKey="1">
             <Card.Body id="newPartOfSpeech">No Data</Card.Body>
           </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
           Example
          </Accordion.Toggle>
           <Accordion.Collapse eventKey="2">
             <Card.Body id="newExample">No Data</Card.Body>
           </Accordion.Collapse>
        </Card>

        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
           Synonym
          </Accordion.Toggle>
           <Accordion.Collapse eventKey="3">
             <Card.Body id="newSynonym">No Data</Card.Body>
           </Accordion.Collapse>
        </Card>

      </Accordion>

      <br></br><br></br> <br></br>

      {/*This card component effectively functions as a footer for the page
      Within it is credit to the API author and a link to their github page*/}
      <Card>
        <Card.Header>Credit</Card.Header>
        <Card.Body>
          <Card.Title>Free Dictionary API</Card.Title>
          <Card.Text>
            All Credits for the API go to meetDeveloper on GitHub
          </Card.Text>
          <Button variant="primary" href="https://github.com/meetDeveloper">Go To Github</Button>
        </Card.Body>
      </Card>

      <br></br>
    
    </Container>
  );
  }//render
}//app extend component

export default App;