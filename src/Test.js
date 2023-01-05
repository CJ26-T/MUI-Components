import React, { useState } from "react";
import {
        Button, TextField, Typography, FormGroup, FormControl, 
        FormControlLabel, Checkbox, Select, InputLabel, MenuItem,
        Radio, RadioGroup, FormLabel
      } from "@mui/material";

const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: 0,
    gender: "",
  });

  const handleChange = (e) => {
    setInputs(
      (prevState) => (
        {
          ...prevState, //接收前一個 state data(包含 name, email, pass)
          //將收到之值寫回 e.target.name(這裡的 name 會依照你在哪個e上面觸發而定)
          //ex.你在 password 輸入值, 這裡就會是 e.target.password(這裡是對應回 password 的 name))
          [e.target.name] : e.target.value
        }
      )
    ); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField  type={"text"} 
                    variant="outlined" 
                    sx={{margin: 3}} 
                    value={inputs.name} 
                    placeholder="your name" 
                    // name="name" 對應到 state name
                    name="name"
                    onChange={handleChange}
        />
        <TextField  type={"text"} 
                    variant="outlined" 
                    sx={{margin: 3}} 
                    value={inputs.email} 
                    placeholder="your email"
                    // name="name" 對應到 state email
                    name="email"
                    onChange={handleChange}
        />
        <TextField  type={"text"} 
                    variant="outlined" 
                    sx={{margin: 3}} 
                    value={inputs.password} 
                    placeholder="your password"
                    name="password"
                    onChange={handleChange}
        />
        <FormGroup>
          <FormControlLabel 
            control={
              <Checkbox 
                  onChange={
                    () => setInputs(
                      (prev) => ({
                        ...prev,
                        subscribe: !inputs.subscribe
                      })
                  )}
                // defaultChecked 
              />} 
              label="Subscribe to a newsletter" 
          />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
        <FormControl>
          <InputLabel>Age</InputLabel>
          <Select
            name="age"
            value={inputs.age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <br/>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            onChange={handleChange}
            defaultValue="female"
            name="gender"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <br/>
        <Button type="submit">Sub</Button>
      </form>
    </div>
  );
};

export default Test;
