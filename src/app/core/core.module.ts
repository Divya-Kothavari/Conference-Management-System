import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [],
  providers: [
    UserService,
    AuthGuard   ]
})
export class CoreModule { }
