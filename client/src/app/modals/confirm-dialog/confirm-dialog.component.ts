import { BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  title!: string
  message!: string
  btnOkText!:string
  btnCancelText!:string
  result!: boolean

  constructor(public bsModalService:BsModalService) { }

  ngOnInit(): void {
  }

  confirm() {
    this.result = true
    this.bsModalService.hide()
  }

  decline() {
    this.result = false
    this.bsModalService.hide()
  }

}
