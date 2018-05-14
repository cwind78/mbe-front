import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CodeFilterPipe } from './code-filter/code-filter';
@NgModule({
	declarations: [CodeFilterPipe],
	imports: [CommonModule],
	exports: [CodeFilterPipe]
})
export class PipesModule {}
