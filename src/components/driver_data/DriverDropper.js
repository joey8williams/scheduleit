import React, {Component} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


// a little function to help us with reordering the result


const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getSelectionStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightred' : 'darkgrey',
  padding: grid,
  width: '100%',
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: '100%',
});
class DriverDropper extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedItems:[{
            id:'x',
            content:'Driver x'
          }],
          items: this.props.drivers
        };
        console.log(this.state.selectedItems);
        this.onDragEnd = this.onDragEnd.bind(this);
    }
    onDragEnd(result) {
        // dropped outside the list
        console.log(result);
        
        if (!result.destination) {
          return;
        }
        
        const draggedItem = this.state.selectedItems.find(item => item.id === result.draggableId) 
                          || this.state.items.find(item => item.id === result.draggableId) ;
                          
        console.log(draggedItem);
        console.log(this.state.selectedItems);
        
        
        if(result.destination.droppableId === "droppable"){
          
          this.setState(prevState => ({
            items:prevState.items.filter(item => item.id !== draggedItem.id),
            selectedItems:[draggedItem,...prevState.selectedItems]
          }));         

          console.log(this.state.selectedItems);
        }
        else if(result.destination.droppableId === "droppable2"){
          this.setState(prevState => ({
            selectedItems:prevState.selectedItems.filter(item => item.id !== draggedItem.id),
            items:[draggedItem,...prevState.items]
          }));         

        }
        

        

    }
    render(){
        
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      style={getSelectionStyle(snapshot.isDraggingOver)}
                    >
                      {this.state.selectedItems.map((item, index) => (
                        <Draggable key={item.id+'selected'} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div>
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                  snapshot.isDragging,
                                  provided.draggableProps.style
                                )}
                              >
                                {item.content}
                              </div>
                              {provided.placeholder}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
            
            
                <Droppable droppableId="droppable2">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      {this.state.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div>
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                  snapshot.isDragging,
                                  provided.draggableProps.style
                                )}
                              >
                                {item.content}
                              </div>
                              {provided.placeholder}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext> 
        );
        
    }
}

export default DriverDropper;