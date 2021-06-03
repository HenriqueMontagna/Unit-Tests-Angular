import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../service/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';

@NgModule({
    declarations: [
      LikeWidgetComponent
    ],
    imports: [
      CommonModule,
      FontAwesomeModule
    ],
    providers: [
      UniqueIdService
    ],
    exports: []
})
export class LikeWidgetModule {}
