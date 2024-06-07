import Templator from "./templator";
import './block.tmpl'
const context = {
    text: 'Мой очень важный span',
    className: 'chats',
    user: {
          info: {
              firstName: 'Alexander',
          },
    },
    handleClick: function() {
          console.log(document.body);
    }
};

tmpl = new Templator(window.blockTemplate)

const renderTemplate = tmpl.compile(context)
