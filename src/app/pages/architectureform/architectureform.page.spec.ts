import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArchitectureformPage } from './architectureform.page';

describe('ArchitectureformPage', () => {
  let component: ArchitectureformPage;
  let fixture: ComponentFixture<ArchitectureformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectureformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitectureformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
