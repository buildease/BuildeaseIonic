import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArchitecturelistPage } from './architecturelist.page';

describe('ArchitecturelistPage', () => {
  let component: ArchitecturelistPage;
  let fixture: ComponentFixture<ArchitecturelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitecturelistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArchitecturelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
