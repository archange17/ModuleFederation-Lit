import { html, render } from 'lit';
import './components/my-element';
const App = () => {
    return html `
        <div>
            <h2>Mon application</h2>
            <my-element></my-element>
        </div>
    `;
};
render(App(), document.querySelector('#root'));
