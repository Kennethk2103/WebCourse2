package suduko;

import javax.swing.*; //imports swing package
import java.util.Random;
import java.awt.*; //imports awt package
import java.awt.event.*; //imports awt.event package for event handling

//creates the actual class
public class DisplaySudoku extends JFrame{

    //defines bounds and box bounds (9x9, 3x3)
    public static final int BOUNDS = 9;
    public static final int BOX_BOUNDS = 3;
	Random gen = new Random();/// creates random object
	int dif;


    //this array holds the actual values, most likely should not alter this
    public int[][] gameBoard;

    private HandleEvents handleTheEvents;

    private JPanel topArea;
    private JPanel gridArea;
    private JPanel mainArea;

    private JButton buttonNewGame;
    private JButton buttonClearBoard;

    private JTextField[][] fields; //creates array of text field objects, used for displaying images on the board
    
    private JButton buttonEasy;
    private JButton buttonMedium;
    private JButton buttonHard;

    public DisplaySudoku(){
        handleTheEvents = new HandleEvents();
        //outline jframe bounds
        setSize(900, 700);
        setTitle("Java Sudoku - AP Computer Science");
        setResizable(false);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        //set up jpanels on the frame
        fields = new JTextField[9][9];
        mainArea = new JPanel();
        mainArea.setLayout(new BoxLayout(mainArea, BoxLayout.Y_AXIS));

        topArea = new JPanel();
        gridArea = new JPanel();

        topArea.setMaximumSize(new Dimension(900, 100));
        topArea.setBackground(Color.DARK_GRAY);

        gridArea.setMaximumSize(new Dimension(900, 600));
        gridArea.setBackground(Color.LIGHT_GRAY);

        mainArea.add(topArea);
        mainArea.add(gridArea);

        //the "this." is added because the class extends JFrame, all you need to know is this line adds the actual mainArea to the frame, making buttons and the game itself visible
        this.add(mainArea);

        //configure toparea
        topArea.setLayout(null);
        
        buttonEasy = new JButton();
        buttonEasy.setText("Easy Mode");
        buttonEasy.setBounds(21, 10, 100, 30);
        buttonEasy.addActionListener(handleTheEvents);
        topArea.add(buttonEasy);

        buttonMedium = new JButton();
        buttonMedium.setText("Medium Mode");
        buttonMedium.setBounds(130, 10, 120, 30);
        buttonMedium.addActionListener(handleTheEvents);
        topArea.add(buttonMedium);

        buttonHard = new JButton();
        buttonHard.setText("Hard Mode");
        buttonHard.setBounds(260, 10, 100, 30);
        buttonHard.addActionListener(handleTheEvents);
        topArea.add(buttonHard);

        
        
    
      
        buttonClearBoard = new JButton();
        buttonClearBoard.setText("Clear Board");
        buttonClearBoard.setBounds(760, 10, 120, 30);
        buttonClearBoard.addActionListener(handleTheEvents);
        topArea.add(buttonClearBoard);

        //configure gridarea
        gridArea.setLayout(new GridLayout(9, 9, 0, 0));

        // create your input fields array
        fields = new JTextField[9][9];
        dif = 20;
    	createboard();
        creategrid();
    }
    public void creategrid() {
    	for(int row = 0; row < gameBoard.length; row++) {
            for(int col = 0; col < gameBoard[0].length; col++) {
                // make sure to instantiate each text field in the array
                fields[row][col] = new JTextField();
            }
    	}
    	refresh();
    }
    public void refresh() {
    	for(int row = 0; row < gameBoard.length; row++) {
            for(int col = 0; col < gameBoard[0].length; col++) {
                // make sure to instantiate each text field in the array
                fields[row][col].setText("");
                fields[row][col].setEnabled(true);
                // get the number for the specific location
                int num = gameBoard[row][col];
          
                //prevents given numbers from being messed with
                if(num != 0) {
                    fields[row][col].setText("" + num);
                    fields[row][col].setEnabled(false);
                }
                //just making text look cleaner
                fields[row][col].setFont(new Font("Verdana", Font.PLAIN, 40));
                fields[row][col].setHorizontalAlignment(JTextField.CENTER);
                //adds the object to the grid
                gridArea.add(fields[row][col]);
            }
        }
    }
    public void clearboard() {
    	for(int row = 0; row < gameBoard.length; row++) {
            for(int col = 0; col < gameBoard[0].length; col++) {
            	if(gameBoard[row][col]==0) {
                    fields[row][col].setText("");

            	}
            	
            }
    }}
   
    public void newgame() {
    	createboard();
    	refresh();
    }
    //event handler,
    private class HandleEvents implements ActionListener{
        @Override
        public void actionPerformed(ActionEvent actionEvent) {
            if(actionEvent.getSource() == buttonClearBoard){
                //if the clear board button is pressed. code in here executes
            	clearboard();
            }
         else if (actionEvent.getSource() == buttonEasy) {
            dif = 8;
            newgame();

        } else if (actionEvent.getSource() == buttonMedium) {
           dif = 30;
           newgame();
        } else if (actionEvent.getSource() == buttonHard) {
        	dif = 100;
        	newgame();

        }
            
        }
    }

    //DO NOT ALTER THIS CLASS
    //holds different levels of difficulty if the user wishes for a harder board layout
    
    public void createboard() {
    	gameBoard=new int [9][9];
    	for(int temp=0; temp<gameBoard.length;temp++) {
    		for(int temp2=0; temp2<gameBoard.length;temp2++) {
    			int num = gen.nextInt(dif)+1;
    			if(num<10 && check(temp,temp2,num)==true) {
    				gameBoard[temp][temp2]=num;  				
    			}
    			else {
    				gameBoard[temp][temp2]=0;
    			}
    		}
    	}
    }
    public boolean check(int row, int col, int num) {
    	for(int temp=0; temp<gameBoard.length;temp++) {
    		if(gameBoard[row][temp]==num) {
    			return false;
    		}
    		if(gameBoard[temp][col]==num) {
    			return false;
    		}    		
    	}
    	for(int temp2=(row/3)*3;temp2<(row/3)*3+3; temp2++) {
    		for(int temp3=(col/3)*3;temp3<(col/3)*3+3;temp3++) {
    			if(gameBoard[temp2][temp3]==num) {
    				return false;
    			}
    		}
    	}
    	return true;
    }
}
