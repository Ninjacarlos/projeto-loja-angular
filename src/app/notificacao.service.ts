import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snackBar: MatSnackBar
  ) { }
  
  notificar(message: string, action: string) {
    this.snackBar.open(message, "OK", {
    duration: 2000,
    verticalPosition: "top",
    horizontalPosition: "center",
    });
  }


}
