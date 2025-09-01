import { render } from '@testing-library/react';
import TeamLeaderDashboard from '../../page';

describe('Team Leader dashboard', () => {
    it('renders without crashing', () => {
        render(<TeamLeaderDashboard />);
    });
});


