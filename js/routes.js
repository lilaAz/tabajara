angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.inCio', {
    url: '/idex',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inCio.html',
        controller: 'inCioCtrl'
      }
    }
  })

  .state('menu.oCurso', {
    url: '/o-curso',
    views: {
      'side-menu21': {
        templateUrl: 'templates/oCurso.html',
        controller: 'oCursoCtrl'
      }
    }
  })

  .state('menu.aEmpresa', {
    url: '/a-empresa',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aEmpresa.html',
        controller: 'aEmpresaCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.contato', {
    url: '/contato',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contato.html',
        controller: 'contatoCtrl'
      }
    }
  })

  .state('menu.produto', {
    url: '/o-produto',
    views: {
      'side-menu21': {
        templateUrl: 'templates/produto.html',
        controller: 'produtoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/idex')

  

});