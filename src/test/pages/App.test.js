import { render, screen } from '@testing-library/react';
import Footer from '../../components/footer';

describe('App testing', () => {
    test('should present footer', () => {
        render(<Footer />);
        screen.debug();
    })
    
})