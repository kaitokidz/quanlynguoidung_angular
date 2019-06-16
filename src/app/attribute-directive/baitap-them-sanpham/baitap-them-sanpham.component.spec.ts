import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapThemSanphamComponent } from './baitap-them-sanpham.component';

describe('BaitapThemSanphamComponent', () => {
  let component: BaitapThemSanphamComponent;
  let fixture: ComponentFixture<BaitapThemSanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapThemSanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapThemSanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
