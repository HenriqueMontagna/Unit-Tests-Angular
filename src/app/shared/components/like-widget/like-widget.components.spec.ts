import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UniqueIdService } from "../../service/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";

describe(LikeWidgetComponent.name, () => {

  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LikeWidgetComponent
      ],
      imports: [
        FontAwesomeModule
      ],
      providers: [
        UniqueIdService
      ]
    }).compileComponents;
    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  it('Should Create Component', () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate ID when id input property is present', () => {
    const component = fixture.componentInstance;
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`${LikeWidgetComponent.prototype.like.name} Should test Output Property When Emit a Event`, () => {
    fixture.detectChanges();
    const component = fixture.componentInstance;
    component.liked.subscribe(() => {
      expect(true).toBeTrue();
    });
    component.like();
  });

  it(`${LikeWidgetComponent.prototype.like.name} Should test Output Property When Emit a Event V2`, () => {
    fixture.detectChanges();
    const component = fixture.componentInstance;
    spyOn(component.liked, 'emit');
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });

});
