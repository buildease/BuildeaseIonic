import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendotpemailPage } from './sendotpemail.page';

describe('SendotpemailPage', () => {
  let component: SendotpemailPage;
  let fixture: ComponentFixture<SendotpemailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendotpemailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendotpemailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
