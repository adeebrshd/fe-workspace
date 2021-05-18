import { render, RenderResult } from '@testing-library/angular';
import { TestSppComponent, TestSppModule } from './public-api';
import { AclTestingModule } from '@allianz/taly-acl/testing';

async function renderComponent() {
  return render(TestSppComponent, {
    excludeComponentDeclaration: true,
    imports: [TestSppModule, AclTestingModule]
  });
}

describe('Test-spp Component', () => {
  let renderResult: RenderResult<TestSppComponent>;
  let buildingBlock: TestSppComponent;

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

  test('show the title', async () => {
    const title = renderResult.getByText('test-spp');
    expect(title).toBeTruthy();
  });

  describe('ACL', () => {
    function denyViewForAndUpdate(aclKey: string) {
      AclTestingModule.setViewAccessFor(aclKey, false);
      renderResult.fixture.detectChanges();
    }

    function denyEditForAndUpdate(aclKey: string) {
      AclTestingModule.setEditAccessFor(aclKey, false);
      renderResult.fixture.detectChanges();
    }

    afterEach(() => {
      AclTestingModule.reset();
    });

    test('hides the headline with acl', async () => {
      denyViewForAndUpdate('headline');

      const headline = renderResult.queryByTestId('headline');
      expect(headline).toBeFalsy();
    });

    test('hides the subheadline with acl', async () => {
      denyViewForAndUpdate('subheadline');

      const subheadline = renderResult.queryByTestId('subheadline');
      expect(subheadline).toBeFalsy();
    });

    test('hides the person form with acl', async () => {
      denyViewForAndUpdate('person');

      const person = renderResult.queryByTestId('person');
      expect(person).toBeFalsy();

      const fnInput = renderResult.queryByTestId('firstNameInput');
      expect(fnInput).toBeFalsy();

      const lnInput = renderResult.queryByTestId('lastNameInput');
      expect(lnInput).toBeFalsy();
    });

    test('disables the person/first-name with acl', async () => {
      denyEditForAndUpdate('person/first-name');

      const input = renderResult.queryByTestId('firstNameInput');
      expect(input).toBeDisabled();
    });

    test('disables the person/last-name with acl', async () => {
      denyEditForAndUpdate('person/last-name');

      const input = renderResult.queryByTestId('lastNameInput');
      expect(input).toBeDisabled();
    });
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
