import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    exports:[
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatBadgeModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule
    ]
})
export class MaterialModule{}