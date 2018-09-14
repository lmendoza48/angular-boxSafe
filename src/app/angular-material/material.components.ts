import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule,
         MatCheckboxModule, 
         MatButtonModule,
         MatInputModule, 
         MatSidenavModule, 
         MatIconModule, 
         MatListModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatDialogModule,
         MatSelectModule,
         MatGridListModule} 
 from '@angular/material';

@NgModule({
  imports: [MatButtonModule, 
            MatCheckboxModule,
            MatExpansionModule,
            MatFormFieldModule,
            MatInputModule,
            MatToolbarModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatDialogModule,
            MatSelectModule,
            MatGridListModule
            ],
 exports: [MatButtonModule, 
           MatCheckboxModule,
           MatExpansionModule,
           MatFormFieldModule, 
           MatInputModule,
           MatToolbarModule,
           MatSidenavModule,
           MatIconModule,
           MatListModule,
           MatDatepickerModule,
           MatNativeDateModule,
           MatDialogModule,
           MatSelectModule,
           MatGridListModule
          ],
})
export class MaterialComponents { }