import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  login(): void {
    if (this.usuario === 'admin' && this.password === '1234') {
      alert('Login correcto');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
