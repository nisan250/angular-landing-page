import { Component, OnInit } from '@angular/core';
import { ModalService } from '../shared/components/modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isSubmitted: boolean;

  constructor(private modalService: ModalService) { }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  ngOnInit(): void {
    this.isSubmitted = false;
  }

  openModal(id: string): void {
    this.modalService.open(id);
  }

  closeModal(id: string): void {
      this.modalService.close(id);
  }
}
