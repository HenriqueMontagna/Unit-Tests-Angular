import { UniqueIdService } from "../../service/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";

describe(LikeWidgetComponent.name, () => {

  let component: LikeWidgetComponent = null;


  beforeEach(() => {
    component = new LikeWidgetComponent(new UniqueIdService());
  });

  it('', () => {

  });

});
