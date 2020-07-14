import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InteriordesignlistPage } from './interiordesignlist.page';

describe('InteriordesignlistPage', () => {
  let component: InteriordesignlistPage;
  let fixture: ComponentFixture<InteriordesignlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriordesignlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InteriordesignlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
