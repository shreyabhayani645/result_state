import './App.css';
import { useState } from 'react';

function App() {

  let [roll_No, setroll_no] = useState("");
  let [name, setname] = useState("");
  let [sub1, setsub1] = useState("");
  let [sub2, setsub2] = useState("");
  let [sub3, setsub3] = useState("");
  let [sub4, setsub4] = useState("");
  let [sub5, setsub5] = useState("");
  let [res, setres] = useState([]);
  let [reset,setreset]=useState([]);
  const btn = () => {

    var total, per = 0, min = 0, max = 0;

    total = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) + parseFloat(sub5);

    if (sub1 >= 35 && sub2 >= 35 && sub3 >= 35 && sub4 >= 35 && sub5 >= 35) {
      per = ((total / 500) * 100).toFixed(2);
    } else {
      per = 0;
    }

    if (sub1 < sub2 && sub1 < sub3 && sub1 < sub4 && sub1 < sub5) {
      min = sub1;
    } else if (sub2 < sub3 && sub2 < sub4 && sub2 < sub5) {
      min = sub2;
    } else if (sub3 < sub4 && sub3 < sub5) {
      min = sub3;
    } else if (sub4 < sub5) {
      min = sub4;
    } else {
      min = sub5;
    }

    if (sub1 > sub2 && sub1 > sub3 && sub1 > sub4 && sub1 > sub5) {
      max = sub1;
    } else if (sub2 > sub3 && sub2 > sub4 && sub2 > sub5) {
      max = sub2;
    } else if (sub3 > sub4 && sub3 > sub5) {
      max = sub3;
    } else if (sub4 > sub5) {
      max = sub4;
    } else {
      max = sub5;
    }

    var cnt = 0, result = '';
    if (sub1 < 35) {
      cnt++;
    }
    if (sub2 < 35) {
      cnt++;
    }
    if (sub3 < 35) {
      cnt++;
    }
    if (sub4 < 35) {
      cnt++;
    }
    if (sub5 < 35) {
      cnt++;
    }
    if (cnt == 0) {
      result = "PASS"
    } else if (cnt == 1 || cnt == 2) {
      result = "ATKT";
    } else {
      result = "FAIL";
    }

    const obj = {
      roll_No: roll_No,
      name: name,
      sub1: sub1,
      sub2: sub2,
      sub3: sub3,
      sub4: sub4,
      sub5: sub5,
      total: total,
      per: per,
      min: min,
      max: max,
      result: result
    }
    setres([...res, obj]);
    setreset([...reset, obj])
    setroll_no("");
    setname("");
    setsub1("");
    setsub2("");
    setsub3("");
    setsub4("");
    setsub5("");
  }
  const perbtn = (e) => {
    const demo = reset.filter((item,index) => {
      return item.per >= parseFloat(e.target.value);
    })
    setres(demo);
  }
  const selectres = (e) => {
    const demo1=reset.filter((item,index) => {
      return item.result == (e.target.value);
    })
    setres(demo1)
  }
  const btnall = () => {
    setres([...reset]);
  }
  const btnsort = () => {
    const demo2=([...reset]);
    demo2.sort((a,b)=>b.per - a.per);
    setres(demo2);
  }

  return (
    <div>
      <div className="App">
      <p>🖤STUDENT Result...!</p>
      <table border={"2"} className='tbl1'>
          <tr>
            <td>Roll No.</td>
            <input type='text' value={roll_No} onChange={(e) => setroll_no(e.target.value)} placeholder='Enter Roll No.'></input>
          </tr>
          <tr>
            <td>Name</td>
            <input type='text' value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter Name'></input>
          </tr>
          <tr>
            <td>Subject 1</td>
            <input type='text' value={sub1} onChange={(e) => setsub1(e.target.value)} placeholder='Enter marks1'></input>
          </tr>
          <tr>
            <td>Subject 2</td>
            <input type='text' value={sub2} onChange={(e) => setsub2(e.target.value)} placeholder='Enter marks2'></input>
          </tr>
          <tr>
            <td>Subject 3</td>
            <input type='text' value={sub3} onChange={(e) => setsub3(e.target.value)} placeholder='Enter marks3'></input>
          </tr>
          <tr>
            <td>Subject 4</td>
            <input type='text' value={sub4} onChange={(e) => setsub4(e.target.value)} placeholder='Enter marks4'></input>
          </tr>
          <tr>
            <td>Subject 5</td>
            <input type='text' value={sub5} onChange={(e) => setsub5(e.target.value)} placeholder='Enter marks5'></input>
          </tr>
          <tr>
            <td className='blank'></td>
              <input type='button' value={"SUBMIT"}  className='btn' onClick={btn}></input>
          </tr>
        </table>
        <div className='result'>
        <select onChange={perbtn}>
          <option>Percentage</option>
          <option value={90}>90+ Percentage</option>
          <option value={80}>80+ Percentage</option>
          <option value={70}>70+ Percentage</option>
          <option value={60}>60+ Percentage</option>
          <option value={50}>50+ Percentage</option>
          <option value={30}>30+ Percentage</option>
          <option value={20}>20+ Percentage</option>
          <option value={0}>0 Percentage</option>
        </select>
        <select  onChange={selectres}>
          <option>result</option>
          <option value={"PASS"}>PASS</option>
          <option value={"FAIL"}>FAIL</option>
          <option value={"ATKT"}>ATKT</option>
        </select>
        <input type='button' value={"all result"} className='all' onClick={btnall}></input>
        <input type='button' value={"sort result"} className='all' onClick={btnsort}></input>
        </div>

        <table border={1}>
          <thead>
            <tr>
              <th>R_NO</th>
              <th>NAME</th>
              <th>Subject1</th>
              <th>Subject2</th>
              <th>Subject3</th>
              <th>Subject4</th>
              <th>Subject5</th>
              <th>Total</th>
              <th>Percentage</th>
              <th>Min</th>
              <th>Max</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {
              res.map((item, index) => (
                <tr key={index} style={{ backgroundColor: item.result ==="PASS" ? 'green':item.result ==="ATKT" ? "blue" : "red" }}>
                  <td>{item.roll_No}</td>
                  <td>{item.name}</td>
                  <td>{item.sub1}</td>
                  <td>{item.sub2}</td>
                  <td>{item.sub3}</td>
                  <td>{item.sub4}</td>
                  <td>{item.sub5}</td>
                  <td>{item.total}</td>
                  <td>{item.per}</td>
                  <td>{item.min}</td>
                  <td>{item.max}</td>
                  <td>{item.result}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;