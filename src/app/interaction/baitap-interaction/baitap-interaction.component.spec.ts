import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapInteractionComponent } from './baitap-interaction.component';

describe('BaitapInteractionComponent', () => {
  let component: BaitapInteractionComponent;
  let fixture: ComponentFixture<BaitapInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
