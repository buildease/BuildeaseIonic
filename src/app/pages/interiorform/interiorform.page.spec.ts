import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InteriorformPage } from './interiorform.page';

describe('InteriorformPage', () => {
  let component: InteriorformPage;
  let fixture: ComponentFixture<InteriorformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InteriorformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
