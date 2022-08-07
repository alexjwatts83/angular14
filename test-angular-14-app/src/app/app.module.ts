import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { UntypedFormComponent } from './untyped-form/untyped-form.component';
import { FormRecordComponent } from './form-record/form-record.component';
import { FormArrayComponent } from './form-array/form-array.component';

@NgModule({
  declarations: [				
    AppComponent,
      TypedFormComponent,
      UntypedFormComponent,
      FormRecordComponent,
      FormArrayComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
