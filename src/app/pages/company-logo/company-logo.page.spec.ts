import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyLogoPage } from './company-logo.page';

describe('CompanyLogoPage', () => {
  let component: CompanyLogoPage;
  let fixture: ComponentFixture<CompanyLogoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyLogoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyLogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
