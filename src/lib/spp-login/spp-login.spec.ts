import { render, RenderResult } from '@testing-library/angular';
import { SppLoginComponent, SppLoginModule } from './public-api';
import { AclTestingModule } from '@allianz/taly-acl/testing';

async function renderComponent() {
  return render(SppLoginComponent, {
    excludeComponentDeclaration: true,
    imports: [SppLoginModule, AclTestingModule]
  });
}

describe('Spp-login Component', () => {
  let renderResult: RenderResult<SppLoginComponent>;
  let buildingBlock: SppLoginComponent;

  beforeEach(async () => {
    renderResult = await renderComponent();
    buildingBlock = renderResult.fixture.debugElement.componentInstance;
    buildingBlock.setResources({
      resourcesData: 'Sample string'
    });

    renderResult.fixture.detectChanges();
  });

  test('should render', async () => {
    expect(renderResult.container).toBeTruthy();
  });

  describe('Building Block Interface', () => {
    test('is always completed', async () => {
      let completed = false;
      buildingBlock.completion$.subscribe((value) => (completed = value));
      buildingBlock.onPageConnection();

      expect(completed).toBeTruthy();
    });
  });
});
