import React from 'react';
import './index.css';

class Survey extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name: "N/A",
        os: "N/A",
        currentSit: "N/A",
        percent: "N/A",
        message: "N/A"
      };
    }

    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }

    mySubmitHandler = (event) => {
      alert("The following has been submitted: \r\n" +
      "Name:" +this.state.name+ "\n"+
      "os:" +this.state.os+ "\n" +
      "Percent:" +this.state.percent + "\n" +
      "Message:" +this.state.message + "\n");
    }

    render(){
      return(
        <div class="row">
        <form id ="survey-form" onSubmit={this.mySubmitHandler}>
          <div class="form-group">
          <h1 id="title" class="text-center">Operating Systems Survey</h1>
            <label for="name">*Enter your name here:</label>
            <input type="text" id="name" name="name" class="form-control" onChange={this.myChangeHandler}required/>
          </div>

          <div class="form-group">
            <p>*Select your overall preferred OS.</p>
            <select id="os" name="os" name="os" class="form-control" value={this.state.os} onChange={this.myChangeHandler} required>
             <option value="windowsnew">Windows 10/8/7</option>
             <option value="windowsold">Windows Vista/XP/Older</option>
             <option value="mac">Mac OSX</option>
             <option value="unix">Unix-based OS</option>
             <option value="none">N/A</option>
            </select>
          </div>

          <div class="form-group">
            <p>*What percentage of your time on a computer is spent on your preferred OS?</p>

            <label>
            <input type="radio" name="percent" value="100" class="input-radio" onChange ={this.myChangeHandler}/>
            80-100%</label>

            <label>
            <input type="radio" name="percent" value="80" class="input radio" onChange ={this.myChangeHandler}/>
            60-80%
            </label>

            <label>
            <input type="radio" name="percent" value="60" class="input radio" onChange ={this.myChangeHandler}/>
            40-60%
            </label>

            <label>
            <input type="radio" name="percent" value="40" class="input radio" onChange ={this.myChangeHandler}/>
            20-40%
            </label>

            <label>
            <input type="radio" name="percent" value="20" class="input radio" onChange ={this.myChangeHandler}/>
            0-20%
            </label>
          </div>

          <div class="form-group">
            <p>*Please explain why you have the preference of OS that you do?</p>
            <textarea name="message" rows="5" cols="54" class="input-textarea" value={this.state.finalComments} onChange={this.myChangeHandler}></textarea>
          </div>

          <div class="form-group">
            <button type="submit" id="submit" class="submit-button">
              Submit
            </button>
          </div>

        </form>
        </div>
      );
    }
}

export default Survey;
