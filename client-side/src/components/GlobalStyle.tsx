import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --main-text-color: #ccc;
    --main-background-color: #000;
    //postpage
    --post-page-info-color:#ccc;
    --post-page-info-background-color:#131314;
    //meta-widget-under posts
    --meta-text-color:#000;
    --meta-background-color:#f90;
    //widgets
    --widget-header-footer-text-color:#fff;
    --widget-header-footer-background-color:transparent;
    //postElement
    --post-element-text-color:#ccc;
    --post-element-info-text-color:#ccc;
    --post-element-background-color:#000;
    //widgetAreas
    --topbar-text-color: #18181b;
    --topbar-background-color: #000;
    --header-text-color:#fff;
    --header-background-color: #000;

    --navigation-text-color: #fff;
    --navigation-background-color: #18181b;

    --sidebar-text-color : #fff;
    --sidebar-background-color : #18181b;

    --footer-text-color:  #fff;
    --footer-background-color: #18181b;
    //comments
    --comment-author-color: #f90 ;
    --comment-date-color: #fff ;
    --comment-body-color: #fff ;
    //popup
    --popup-text-color:#fff;
    --popup-outer-background-color:rgba(0,0,0,.6);
    --popup-background-color:#191919;
    --popup-header-color:#202020;

    //activeColors
    --main-active-color :#f90;

    //buttons
    --primary-button-link-background-color: #f90;
    --primary-button-link-text-color: #000;

    --secondary-button-link-background-color: #6c757d;
    --secondary-button-link-text-color: #fff;

    --success-button-link-background-color: #28a745;
    --success-button-link-text-color: #fff;

    --danger-button-link-background-color: #dc3545;
    --danger-button-link-text-color: #fff;

    --warning-button-link-background-color: #f90;
    --warning-button-link-text-color: #212529;

    --info-button-link-background-color: #117a8b;
    --info-button-link-text-color: #fff;

    --dark-button-link-background-color:#343a40;
    --dark-button-link-border-color: #343a40;
    --dark-button-link-text-color: #fff;

    --light-button-link-background-color:#f8f9fa;
    --light-button-link-border-color: #f8f9fa;
    --light-button-link-text-color: #212529;

    //border
    --default-border-color : rgba(138,145,158,.5);
    --default-border : solid var(--default-border-color,#ccc) .5px;
    --default-box-sizing:   border-box;
  }

  body {
    background-color: var(--main-background-color, #000);
    margin: 0;
    color: var(--main-text-color, '#ccc');
    font-family: Arial, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 15px;
  }

  #content {
    margin: 0 auto;
    width: 100%;
    max-width: 100vw;
    display: grid;
    grid-area: page;
    min-height: 40em;

    #primary {
      grid-area: primary;
      width: 100%;
    }
  }

  a {
    text-decoration: none;
  }

  .post-element-info-logo {
    max-width: 25px;
    max-height: 25px;
    color: var(--post-element-text-color, #ccc);
  }

  .value-next-icon {
    color: var(--post-element-text-color, #ccc);
    margin: 0 5px;
  }

  .post-element-info-data {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 1px 3px;
    color: var(--post-element-text-color, #ccc);
  }

  .left-sidebar-layout {
    display: grid;
    grid-area: leftSidebar;
    grid-template-columns: 1fr;
    grid-template-areas:
          'header'
          'navigation'
          'main'
          'footer';
  }
  
  #page {
    grid-area: main;
  }

  .page-both-sidebar {
    grid-template-columns: 1fr;
    grid-template-areas: 'primary'
                         'left-sidebar'
                         'right-sidebar';
  }

  .page-no-sidebar {
    grid-template-columns: 1fr;
    grid-template-areas: 'primary';
  }

  .page-left-sidebar {
    grid-template-columns: 1fr;
    grid-template-areas: 'primary'
                         'left-sidebar';
  }

  .page-right-sidebar {
    grid-template-columns: 1fr;
    grid-template-areas: 'primary'
                         'right-sidebar';
  }


  .action-client-button-link {
    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    box-shadow: 0 0 5px 2.5px rgba(255, 255, 255, .2);
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid var(--primary-button-link-text-color, #000);
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    cursor: pointer;
  }

  .btn-primary {
    background-color: var(--primary-button-link-background-color, #f90);
    color: var(--primary-button-link-text-color, #000);
  }

  .btn-secondary {
    background-color: var(--secondary-button-link-background-color, #6c757d);
    color: var(--secondary-button-text-color, #fff);
  }

  .btn-success {
    background-color: var(--success-button-link-background-color, #28a745);
    color: var(--success-button-text-color, #fff);
  }

  .btn-danger {
    background-color: var(--danger-button-link-background-color, #dc3545);
    color: var(--danger-button-text-color, #fff);
  }

  .btn-warning {
    background-color: var(--warning-button-link-background-color, #f90);
    color: var(--warning-button-text-color, #212529);
  }

  .btn-info {
    background-color: var(--info-button-link-background-color, #117a8b);
    color: var(--info-button-text-color, #fff);
  }

  .btn-transparent-dark {
    background-color: transparent;
    color: var(--transparent-dark-button-color, #343a40);
    border-color: transparent;
  }

  .btn-transparent-light {
    background-color: transparent;
    color: var(--transparent-light-button-color, #fff);
    border-color: transparent;
  }

  .btn-dark {
    background-color: var(--dark-button-link-background-color, #343a40);
    border-color: var(--dark-button-link-border-color, #343a40);
    color: var(--info-button-text-color, #fff);
  }

  .btn-navigation {
    background-color: var(--navigation-background-color, #18181b);
    color: var(--navigation-text-color, #ccc);
    border: none;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-control-input {
    width: 100%;
    display: block;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }

  .form-control-input-validator {
    width: 85%;
  }

  .custom-select {
    display: inline-block;
    width: 50%;
    height: calc(2.25rem + 2px);
    padding: .375rem .75rem .375rem .75rem;
    line-height: 1.5;
    color: #495057;
    vertical-align: middle;
    background: #fff;
    border: 1px solid #ced4da;
    border-radius: .25rem;
  }

  @media only screen and (min-width: 768px) {
    body {
      font-size: 14px;
    }


    //---pages grid----
    .page-both-sidebar {
      grid-template-columns: 320px 1fr 320px;
      grid-template-areas: 'left-sidebar primary right-sidebar';
    }

    .page-no-sidebar {
      grid-template-columns: 1fr;
      grid-template-areas: 'primary';
    }

    .page-left-sidebar {
      grid-template-columns: 320px 1fr;
      grid-template-areas: 'left-sidebar primary';
    }

    .page-right-sidebar {
      grid-template-columns: 1fr 320px;
      grid-template-areas: 'primary right-sidebar';
    }

    .without-sidebar-layout {
      grid-template-columns: 1fr;
    }


    .simple-button {
      background-color: transparent;
      color: var(--main-text-color);
      margin: 10px 0;
    }

  }

  @keyframes navigationMobileSlide {
    from {
      left: -100%;
    }
    to {
      left: 0;
    }
  }

  @keyframes userMenuSlide {
    from {
      right: -100%;
    }
    to {
      right: 0;
    }
  }

  @keyframes searchbarFall {
    from {
      top: -40px;
    }
    to {
      top: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    //.left-sidebar-layout {
    //  display: grid;
    //  grid-area: leftSidebar;
    //  grid-template-columns: 1fr;
    //  grid-template-areas:
    //      'header header'
    //      'navigation navigation'
    //      'main main'
    //      'footer footer';
    //}
    #page {
      margin: 0;
    }
  }
`

const GlobalStylesComponent = () => {
    return (
        <GlobalStyles/>
    )
}

export default GlobalStylesComponent;