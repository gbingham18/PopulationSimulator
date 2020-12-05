

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
//import {MatSliderModule} from '@angular/material/slider';
//declare let d3: any;

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})


export class GraphsComponent {

  constructor(private http: HttpClient){}

  serverDataL1;
  serverDataL2;
  serverDataL3;
  serverDataL4;
  serverDataR1;
  serverDataR2;
  serverDataR3;
  serverDataR4;
  PrevLGenLength;
  PrevRGenLength;
  graphSection:string;
  optionsL;
  optionsR;
  dataL;
  dataR;

  LfitsliderChange(event)
  {
    var LfitAAtext = document.getElementById('LfitAAtext');
    var LfitAAslide = document.getElementById('LfitAA');
    (<HTMLInputElement>LfitAAtext).value = (<HTMLInputElement>LfitAAslide).value;
  //  console.log(LfitAAtext.value);
  }

  LfitsliderChange1(event)
  {
    var LfitAatext = document.getElementById('LfitAatext');
    var LfitAaslide = document.getElementById('LfitAa');
    (<HTMLInputElement>LfitAatext).value = (<HTMLInputElement>LfitAaslide).value;
  //  console.log(LfitAatext.value);
  }

  LfitsliderChange2(event)
  {
    var Lfitaatext = document.getElementById('Lfitaatext');
    var Lfitaaslide = document.getElementById('Lfitaa');
    (<HTMLInputElement>Lfitaatext).value = (<HTMLInputElement>Lfitaaslide).value;
   // console.log(Lfitaatext.value);
  }

  LAtoaMutsliderChange(event)
  {
    var LAtoaMuttext = document.getElementById('LAtoaMuttext');
    var LAtoaMutslide = document.getElementById('LAtoaMut');
    (<HTMLInputElement>LAtoaMuttext).value = (<HTMLInputElement>LAtoaMutslide).value;
  //  console.log(LAtoaMuttext.value);
  }

  LatoAMutsliderChange(event)
  {
    var LatoAMuttext = document.getElementById('LatoAMuttext');
    var LatoAMutslide = document.getElementById('LatoAMut');
    (<HTMLInputElement>LatoAMuttext).value = (<HTMLInputElement>LatoAMutslide).value;
    //console.log(LatoAMuttext.value);
  }

  LAlleFreqsliderChange(event)
  {
    var LAlleFreqtext = document.getElementById('LAlleFreqtext');
    var LAlleFreqslide = document.getElementById('LAlleFreq');
    (<HTMLInputElement>LAlleFreqtext).value = (<HTMLInputElement>LAlleFreqslide).value;
   // console.log(LAlleFreqtext.value);
  }

  LpopSizesliderChange(event)
  {
    var LpopSizetext = document.getElementById('LpopSizetext');
    var LpopSizeslider = document.getElementById('LpopSize');
    (<HTMLInputElement>LpopSizetext).value = (<HTMLInputElement>LpopSizeslider).value;
   // console.log(LpopSizetext.value);
  }

  LGenNumsliderChange(event)
  {
    var LGenNumtext = document.getElementById('LGenNumtext');
    var LGenNumslider = document.getElementById('LGenNum');
    (<HTMLInputElement>LGenNumtext).value = (<HTMLInputElement>LGenNumslider).value;
  }

  RfitsliderChange(event)
  {
    var RfitAAtext = document.getElementById('RfitAAtext');
    var RfitAAslide = document.getElementById('RfitAA');
    (<HTMLInputElement>RfitAAtext).value = (<HTMLInputElement>RfitAAslide).value;
  }

  RfitsliderChange1(event)
  {
    var RfitAatext = document.getElementById('RfitAatext');
    var RfitAaslide = document.getElementById('RfitAa');
    (<HTMLInputElement>RfitAatext).value = (<HTMLInputElement>RfitAaslide).value;
  }

  RfitsliderChange2(event)
  {
    var Rfitaatext = document.getElementById('Rfitaatext');
    var Rfitaaslide = document.getElementById('Rfitaa');
    (<HTMLInputElement>Rfitaatext).value = (<HTMLInputElement>Rfitaaslide).value;
  }

  RAtoaMutsliderChange(event)
  {
    var RAtoaMuttext = document.getElementById('RAtoaMuttext');
    var RAtoaMutslide = document.getElementById('RAtoaMut');
    (<HTMLInputElement>RAtoaMuttext).value = (<HTMLInputElement>RAtoaMutslide).value;
  }

  RatoAMutsliderChange(event)
  {
    var RatoAMuttext = document.getElementById('RatoAMuttext');
    var RatoAMutslide = document.getElementById('RatoAMut');
    (<HTMLInputElement>RatoAMuttext).value = (<HTMLInputElement>RatoAMutslide).value;
  }

  RAlleFreqsliderChange(event)
  {
    var RAlleFreqtext = document.getElementById('RAlleFreqtext');
    var RAlleFreqslide = document.getElementById('RAlleFreq');
    (<HTMLInputElement>RAlleFreqtext).value = (<HTMLInputElement>RAlleFreqslide).value;
  }

  RpopSizesliderChange(event)
  {
    var RpopSizetext = document.getElementById('RpopSizetext');
    var RpopSizeslider = document.getElementById('RpopSize');
    (<HTMLInputElement>RpopSizetext).value = (<HTMLInputElement>RpopSizeslider).value;
  }

  RGenNumsliderChange(event)
  {
    var RGenNumtext = document.getElementById('RGenNumtext');
    var RGenNumslider = document.getElementById('RGenNum');
    (<HTMLInputElement>RGenNumtext).value = (<HTMLInputElement>RGenNumslider).value;
  }
  
  LfitAAtextChange(event)
  {
    var LfitAASlider = document.getElementById('LfitAA');
    var LfitAAtext = document.getElementById('LfitAAtext');
    (<HTMLInputElement>LfitAASlider).value = (<HTMLInputElement>LfitAAtext).value;
  }

  LfitAatextChange(event)
  {
    var LfitAaSlider = document.getElementById('LfitAa');
    var LfitAatext = document.getElementById('LfitAatext');
    (<HTMLInputElement>LfitAaSlider).value = (<HTMLInputElement>LfitAatext).value;
  }

  LfitaatextChange(event)
  {
    var LfitaaSlider = document.getElementById('Lfitaa');
    var Lfitaatext = document.getElementById('Lfitaatext');
    (<HTMLInputElement>LfitaaSlider).value = (<HTMLInputElement>Lfitaatext).value;
  }

  LAtoaMuttextChange(event)
  {
    var LAaMutSlider = document.getElementById('LAtoaMut');
    var LAaMuttext = document.getElementById('LAtoaMuttext');
    (<HTMLInputElement>LAaMutSlider).value = (<HTMLInputElement>LAaMuttext).value;
  }

  LatoAMuttextChange(event)
  {
    var LaAMutSlider = document.getElementById('LatoAMut');
    var LatoAMuttext = document.getElementById('LatoAMuttext');
    (<HTMLInputElement>LaAMutSlider).value = (<HTMLInputElement>LatoAMuttext).value;
  }

  LAlleFreqtextChange(event)
  {
    var LAlleSlider = document.getElementById('LAlleFreq');
    var LAlletext = document.getElementById('LAlleFreqtext');
    (<HTMLInputElement>LAlleSlider).value = (<HTMLInputElement>LAlletext).value;
  }

  LpopSizetextChange(event)
  {
    var LpopSlider = document.getElementById('LpopSize');
    var Lpoptext = document.getElementById('LpopSizetext');
    (<HTMLInputElement>LpopSlider).value = (<HTMLInputElement>Lpoptext).value;
  }

  LGenNumtextChange(event)
  {
    var LGenSlider = document.getElementById('LGenNum');
    var LGentext = document.getElementById('LGenNumtext');
    (<HTMLInputElement>LGenSlider).value = (<HTMLInputElement>LGentext).value;
  }

  RfitAAtextChange(event)
  {
    var RfitAASlider = document.getElementById('RfitAA');
    var RfitAAtext = document.getElementById('RfitAAtext');
    (<HTMLInputElement>RfitAASlider).value = (<HTMLInputElement>RfitAAtext).value;
  }

  RfitAatextChange(event)
  {
    var RfitAaSlider = document.getElementById('RfitAa');
    var RfitAatext = document. getElementById('RfitAatext');
    (<HTMLInputElement>RfitAaSlider).value = (<HTMLInputElement>RfitAatext).value;
  }

  RfitaatextChange(event)
  {
    var RfitaaSlider = document.getElementById('Rfitaa');
    var Rfitaatext = document.getElementById('Rfitaatext');
    (<HTMLInputElement>RfitaaSlider).value = (<HTMLInputElement>Rfitaatext).value;
  }

  RAtoaMuttextChange(event)
  {
    var RAtoaSlider = document.getElementById('RAtoaMut');
    var RAtoatext = document.getElementById('RAtoaMuttext');
    (<HTMLInputElement>RAtoaSlider).value = (<HTMLInputElement>RAtoatext).value;
  }

  RatoAMuttextChange(event)
  {
    var RatoASlider = document.getElementById('RatoAMut');
    var RatoAtext = document.getElementById('RatoAMuttext');
    (<HTMLInputElement>RatoASlider).value = (<HTMLInputElement>RatoAtext).value;
  }

  RAlleFreqtextChange(event)
  {
    var RAlleSlider = document.getElementById('RAlleFreq');
    var RAlletext = document.getElementById('RAlleFreqtext');
    (<HTMLInputElement>RAlleSlider).value = (<HTMLInputElement>RAlletext).value;
  }

  RpopSizetextChange(event)
  {
    var RpopSlider = document.getElementById('RpopSize');
    var Rpoptext= document.getElementById('RpopSizetext');
    (<HTMLInputElement>RpopSlider).value = (<HTMLInputElement>Rpoptext).value;
  }

  RGenNumtextChange(event)
  {
    var RGenSlider = document.getElementById('RGenNum');
    var RGentext = document.getElementById('RGenNumtext');
    (<HTMLInputElement>RGenSlider).value = (<HTMLInputElement>RGentext).value;
  }

  getLeftData(event){
    console.log(d3);
    let p = new Promise((resolve, reject) => {
      this.http.post('https://popsimbackend2.us-west-2.elasticbeanstalk.com/',
      {
        "p": (<HTMLInputElement>document.getElementById('LAlleFreq')).value,
        "numGens": (<HTMLInputElement>document.getElementById('LGenNum')).value,
        "popSize": (<HTMLInputElement>document.getElementById('LpopSize')).value,
        "fitA1": (<HTMLInputElement>document.getElementById('LfitAA')).value,
        "fitA2": (<HTMLInputElement>document.getElementById('LfitAa')).value,
        "fitA3": (<HTMLInputElement>document.getElementById('Lfitaa')).value,
        "mutAa": 0,
        "mutaA": 0
      }
      ).toPromise()
      .then(
        res => {
          this.serverDataL1 = Object(res)["data"];
          resolve();
        }
      )
      return p;
    })

    p.then(() => {
      let p2 = new Promise((resolve, reject) => {
        this.http.post('https://popsimbackend2.us-west-2.elasticbeanstalk.com/',
        {
          "p": (<HTMLInputElement>document.getElementById('LAlleFreq')).value,
          "numGens": (<HTMLInputElement>document.getElementById('LGenNum')).value,
          "popSize": (<HTMLInputElement>document.getElementById('LpopSize')).value,
          "fitA1": (<HTMLInputElement>document.getElementById('LfitAA')).value,
          "fitA2": (<HTMLInputElement>document.getElementById('LfitAa')).value,
          "fitA3": (<HTMLInputElement>document.getElementById('Lfitaa')).value,
          "mutAa": 0,
          "mutaA": 0
        }
        ).toPromise()
        .then(
          res => {
            this.serverDataL2 = Object(res)["data"];
            resolve();
          }
        )
        return p2;
      })

      p2.then(() => {
        let p3 = new Promise((resolve, reject) => {
          this.http.post('https://popsimbackend2.us-west-2.elasticbeanstalk.com/',
          {
            "p": (<HTMLInputElement>document.getElementById('LAlleFreq')).value,
            "numGens": (<HTMLInputElement>document.getElementById('LGenNum')).value,
            "popSize": (<HTMLInputElement>document.getElementById('LpopSize')).value,
            "fitA1": (<HTMLInputElement>document.getElementById('LfitAA')).value,
            "fitA2": (<HTMLInputElement>document.getElementById('LfitAa')).value,
            "fitA3": (<HTMLInputElement>document.getElementById('Lfitaa')).value,
            "mutAa": 0,
            "mutaA": 0
          }
          ).toPromise()
          .then(
            res => {
              this.serverDataL3 = Object(res)["data"];
              resolve();
            }
          )
          return p3;
        })

        p3.then(() => {
          let p4 = new Promise((resolve, reject) => {
            this.http.post('https://popsimbackend2.us-west-2.elasticbeanstalk.com/',
            {
              "p": (<HTMLInputElement>document.getElementById('LAlleFreq')).value,
              "numGens": (<HTMLInputElement>document.getElementById('LGenNum')).value,
              "popSize": (<HTMLInputElement>document.getElementById('LpopSize')).value,
              "fitA1": (<HTMLInputElement>document.getElementById('LfitAA')).value,
              "fitA2": (<HTMLInputElement>document.getElementById('LfitAa')).value,
              "fitA3": (<HTMLInputElement>document.getElementById('Lfitaa')).value,
              "mutAa": 0,
              "mutaA": 0
            }
            ).toPromise()
            .then(
              res => {
                this.serverDataL4 = Object(res)["data"];
                resolve();
              }
            )
            return p4;
          })

          p4.then(() => {
            if (this.PrevLGenLength != this.serverDataL1.length) {
              this.optionsL.chart.duration = 0;
              this.optionsL.chart.xDomain = [0, this.serverDataL1.length.toString()];
              this.PrevLGenLength = this.serverDataL1.length;
            }
            else {
              this.optionsL.chart.duration = 500;
            }
            this.dataL = [
              {
                key : '1',
                values: this.serverDataL1,
                color: "blue"
              },
              {
                key: '2',
                values: this.serverDataL2,
                color: "green"
              },
              {
                key: '3',
                values: this.serverDataL3,
                color:'orange'
              },
              {
                key: '4',
                values: this.serverDataL4,
                color:'red'
              }
            ]
          })
        })
      })
    })
}

getRightData(event){
  let p = new Promise((resolve, reject) => {
    this.http.post('https://popsimbackend2.us-west-2.elasticbeanstalk.com/',
    {
      "p": (<HTMLInputElement>document.getElementById('RAlleFreq')).value,
      "numGens": (<HTMLInputElement>document.getElementById('RGenNum')).value,
      "popSize": (<HTMLInputElement>document.getElementById('RpopSize')).value,
      "fitA1": (<HTMLInputElement>document.getElementById('RfitAA')).value,
      "fitA2": (<HTMLInputElement>document.getElementById('RfitAa')).value,
      "fitA3": (<HTMLInputElement>document.getElementById('Rfitaa')).value,
      "mutAa": 0,
      "mutaA": 0
    }
    ).toPromise()
    .then(
      res => {
        this.serverDataR1 = Object(res)["data"];
        Object(Object(this.optionsR)["chart"])["xDomain"] = [0, Object(res)["data"].length.toString()];
        resolve();
      }
    )
    return p;
  })

  p.then(() => {
    let p2 = new Promise((resolve, reject) => {
      this.http.post('https://popsimbackend2.us-west-2.elasticbeanstalk.com/',
      {
        "p": (<HTMLInputElement>document.getElementById('RAlleFreq')).value,
        "numGens": (<HTMLInputElement>document.getElementById('RGenNum')).value,
        "popSize": (<HTMLInputElement>document.getElementById('RpopSize')).value,
        "fitA1": (<HTMLInputElement>document.getElementById('RfitAA')).value,
        "fitA2": (<HTMLInputElement>document.getElementById('RfitAa')).value,
        "fitA3": (<HTMLInputElement>document.getElementById('Rfitaa')).value,
        "mutAa": 0,
        "mutaA": 0
      }
      ).toPromise()
      .then(
        res => {
          this.serverDataR2 = Object(res)["data"];
          resolve();
        }
      )
      return p2;
    })

    p2.then(() => {
      let p3 = new Promise((resolve, reject) => {
        this.http.post('https://popsimbackend2.us-west-2.elasticbeanstalk.com/',
        {
          "p": (<HTMLInputElement>document.getElementById('RAlleFreq')).value,
          "numGens": (<HTMLInputElement>document.getElementById('RGenNum')).value,
          "popSize": (<HTMLInputElement>document.getElementById('RpopSize')).value,
          "fitA1": (<HTMLInputElement>document.getElementById('RfitAA')).value,
          "fitA2": (<HTMLInputElement>document.getElementById('RfitAa')).value,
          "fitA3": (<HTMLInputElement>document.getElementById('Rfitaa')).value,
          "mutAa": 0,
          "mutaA": 0
        }
        ).toPromise()
        .then(
          res => {
            this.serverDataR3 = Object(res)["data"];
            resolve();
          }
        )
        return p3;
      })

      p3.then(() => {
        let p4 = new Promise((resolve, reject) => {
          this.http.post('https://popsimbackend2.us-west-2.elasticbeanstalk.com/',
          {
            "p": (<HTMLInputElement>document.getElementById('RAlleFreq')).value,
            "numGens": (<HTMLInputElement>document.getElementById('RGenNum')).value,
            "popSize": (<HTMLInputElement>document.getElementById('RpopSize')).value,
            "fitA1": (<HTMLInputElement>document.getElementById('RfitAA')).value,
            "fitA2": (<HTMLInputElement>document.getElementById('RfitAa')).value,
            "fitA3": (<HTMLInputElement>document.getElementById('Rfitaa')).value,
            "mutAa": 0,
            "mutaA": 0
          }
          ).toPromise()
          .then(
            res => {
              this.serverDataR4 = Object(res)["data"];
              resolve();
            }
          )
          return p4;
        })

        p4.then(() => {
          if (this.PrevRGenLength != this.serverDataR1.length) {
            this.optionsR.chart.duration = 0;
            this.optionsR.chart.xDomain = [0, this.serverDataR1.length.toString()];
            this.PrevRGenLength = this.serverDataR1.length;
          }
          else {
            this.optionsR.chart.duration = 500;
          }
          this.dataR = [
            {
              key : '1',
              values: this.serverDataR1,
              color: "blue"
            },
            {
              key: '2',
              values: this.serverDataR2,
              color: "green"
            },
            {
              key: '3',
              values: this.serverDataR3,
              color:'orange'
            },
            {
              key: '4',
              values: this.serverDataR4,
              color:'red'
            }
          ]
        })
      })
    })
  })
}


  ngOnInit() {


    this.graphSection = 'Graph Component Section';
    this.optionsL = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 65
        },
        x: function(d){return d[0];},
        y: function(d){return d[1];},
        showValues: true,
        objectEquality: true,
        useInteractiveGuideline: true,
        duration: 500,
        xAxis: {
          axisLabel: 'Number of Generations',
          ticks: 10
        },
        yAxis: {
          axisLabel: 'Frequency of A (P)',
          ticks: 10,
          showMaxMin: true,
          tickFormat: function(d){
            return d3.format('.1f')(d);
          }
        },
        yDomain: [0, 1.1],
        xDomain: [0, (<HTMLInputElement>document.getElementById('LGenNum')).value]
      }
    }
    
    this.optionsR = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 65
        },
        x: function(d){return d[0];},
        y: function(d){return d[1];},
        showValues: true,
        objectEquality: true,
        useInteractiveGuideline: true,
        duration: 500,
        xAxis: {
          axisLabel: 'Number of Generations',
          ticks: 10
        },
        yAxis: {
          axisLabel: 'Frequency of A (P)',
          ticks: 10,
          showMaxMin: true,
          tickFormat: function(d){
            return d3.format('.1f')(d);
          }
        },
        yDomain: [0, 1.1],
        xDomain: [0, (<HTMLInputElement>document.getElementById('RGenNum')).value]
      }
    }
    
    this.dataL = [
      {
        key: '1',
        values: this.serverDataL1 = [[0, 0]],
        color:'blue'
      }, 
      {
        key: '2',
        values: this.serverDataL2 = [[0, 0]],
        color:'green'
      },
      {
        key: '3',
        values: this.serverDataL3 = [[0, 0]],
        color:'orange'
      },
      {
        key: '4',
        values: this.serverDataL4 = [[0, 0]],
        color:'red'
      }
    ];

    this.dataR = [
      {
        key: '1',
        values: this.serverDataR1 = [[0, 0]],
        color:'blue'
      }, 
      {
        key: '2',
        values: this.serverDataR2 = [[0, 0]],
        color:'green'
      },
      {
        key: '3',
        values: this.serverDataR3 = [[0, 0]],
        color:'orange'
      },
      {
        key: '4',
        values: this.serverDataR4 = [[0, 0]],
        color:'red'
      }
    ];
    this.PrevLGenLength = 100;
    this.PrevRGenLength = 100;
  }
}