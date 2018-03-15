import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CS-472 Project';
  species = ["Human", "Tiger", "Panda", "Whale",
   "Rodent", "Wolf", "Lion", "Ape", "Reptiles",
    "Eagle", "Dog", "Cat"];
    isAvailable = true;

    ChangeSpecies(event)
    {
      console.log("Changed species from dropdown menu");
      console.log(event);
      alert("Changed Species in dropdown menu");
    }

    ClickButton(event)
    {
      alert("Button Clicked");
      console.log(event);
    }
}
