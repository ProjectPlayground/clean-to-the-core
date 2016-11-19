/**
 * @module UiModule
 * @preferred
 */ /** */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconArrowDownComponent } from './icons/icon-arrow-down/icon-arrow-down.component';
import { IconFacebookComponent } from './icons/icon-facebook/icon-facebook.component';
import { IconHeartComponent } from './icons/icon-heart/icon-heart.component';
import { IconInstagramComponent } from './icons/icon-instagram/icon-instagram.component';
import { IconNavComponent } from './icons/icon-nav/icon-nav.component';
import { IconPinterestComponent } from './icons/icon-pinterest/icon-pinterest.component';
import { IconSearchComponent } from './icons/icon-search/icon-search.component';
import { IconTimeComponent } from './icons/icon-time/icon-time.component';
import { LogoComponent } from './icons/logo/logo.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
/**
 * @whatItDoes {@link UiModule} exists to hold the common user interface methods that offers a
 * consistant look and api to the rest of the app.
 * 
 * **Input API:**
 * - `.get()` returns the current value
 * - `.set(newValue)` sets the input to a new value
 * - `(update)="newValue"` EventEmitter for all updates 
 * 
 * **Features:**
 * - All input items have the same api
 * - Everything should be super simple
 * - Encapsulation - the messy details of design and function are hidden within the encapsulation
 * of each component.
 * - Each `scss` file only contains scss that relates to the component making it easier to make
 * changes and spot errors. 
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconArrowDownComponent,
    IconFacebookComponent,
    IconHeartComponent,
    IconInstagramComponent,
    IconNavComponent,
    IconPinterestComponent,
    IconSearchComponent,
    IconTimeComponent,
    InputComponent,
    LogoComponent,
    SelectComponent
  ],
  exports: [
    IconArrowDownComponent,
    IconFacebookComponent,
    IconHeartComponent,
    IconInstagramComponent,
    IconNavComponent,
    IconPinterestComponent,
    IconSearchComponent,
    IconTimeComponent,
    InputComponent,
    LogoComponent,
    SelectComponent
  ]
})
export class UiModule { }
