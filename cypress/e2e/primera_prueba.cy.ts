import {e2e} from '../support/constantes'

const nombreDeActividad = 'Nueva actividad';
const nuevoNombreDeActividad = 'Nueva actividad';

describe('List de actividades', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Agregar una actividad', () => {
    cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type(nombreDeActividad);
    cy.get(e2e.BOTON_AGREGAR).click();
    cy.contains('ul.actividades-list li.actividad-item', nombreDeActividad).should('be.visible');
  })

  describe('Eliminar/Editar de actividades', () => {
    beforeEach(() => {
      cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type(nombreDeActividad);
      cy.get(e2e.BOTON_AGREGAR).click();
    });
  
    it('Editar una actividad', () => {
      cy.get(e2e.BOTON_EDITAR).click();
      cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type(nuevoNombreDeActividad);
      cy.get(e2e.BOTON_GUARDAR).click();
      cy.contains('ul.actividades-list li.actividad-item', nombreDeActividad).should('be.visible');
    })
  
    it('Eliminar una actividad', () => {
      cy.get(e2e.BOTON_ELIMINAR).click();
      cy.contains('ul.actividades-list li.actividad-item', nombreDeActividad).should('not.exist');
    })
  })
})