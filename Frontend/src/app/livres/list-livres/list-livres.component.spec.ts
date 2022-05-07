import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLivresComponent } from './list-livres.component';

describe('ListLivresComponent', () => {
  let component: ListLivresComponent;
  let fixture: ComponentFixture<ListLivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLivresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
