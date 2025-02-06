import { Component } from '@angular/core';
import { DataServiceService } from '../../services/data/data-service.service';

@Component({
  selector: 'app-single-product',
  standalone: false,

  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  //Start section of questions and answer
  questions: any;
  openAnswer: boolean[] = []
  //End section of questions and answer

  constructor(private data: DataServiceService) { }

  ngOnInit() {
    //Start section of questions and answer
    this.questions = this.data.questions
    this.questions.forEach((el: any) => {
      this.openAnswer.push(el.statusOpen)
    });
    //end section of questions and answer

  }
  //Start section of questions and answer
  toggleAnswer(index: number) {
    this.openAnswer = this.openAnswer.map((el, i) => i === index ? !el : false);
  }
  //end section of questions and answer

}
