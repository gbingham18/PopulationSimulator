import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Population Simulator';
  projDesc = 'In biology, specifically genetics, it is important to know not only what will influence the genetic frequencies in a population, but also how these frequencies change over many generations. Below are graphs that simulate genetic frequencies across generations.'


}