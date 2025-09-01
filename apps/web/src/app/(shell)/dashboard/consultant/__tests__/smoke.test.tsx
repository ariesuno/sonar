import { render } from '@testing-library/react';
import ConsultantDashboard from '../../page';

describe('Consultant dashboard', () => {
    it('renders without crashing', () => {
        render(<ConsultantDashboard />);
    });
});


