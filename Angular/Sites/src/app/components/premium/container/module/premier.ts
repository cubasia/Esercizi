import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremierRoutingModule } from './premier-routing.module'
import { ContainerComponent } from '../container.component';
import { FooterComponent } from '../../footer/footer.component'
import { HeaderComponent } from '../../header/header.component'
import { PortfolioComponent } from '../../portfolio/portfolio.component'
import { ReviewComponent } from '../../review/review.component'
import { ServicesComponent } from '../../services/services.component'
import { SlideShowComponent } from '../../slide-show/slide-show.component';
import { TeamComponent } from '../../team/team.component';
import { AboutComponent } from '../../about/about.component';
import { BlogComponent } from '../../blog/blog.component';



@NgModule({
  declarations: [ContainerComponent, FooterComponent, HeaderComponent, PortfolioComponent,
  ReviewComponent,ServicesComponent,SlideShowComponent,TeamComponent,AboutComponent,BlogComponent],
  imports: [CommonModule, PremierRoutingModule]

})
export class PremierModule {}
