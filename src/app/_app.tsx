import { createRoot } from 'react-dom/client';
import './globals.scss';
import { IndexPage } from '../pages/index';

const root = createRoot(document.getElementById('root'));
root.render(<>
    <IndexPage />
</>);