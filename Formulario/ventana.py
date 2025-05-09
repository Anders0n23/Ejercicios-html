from tkinter import *

ventana = Tk() #Crear ventana
ventana.title("Prueba de escritorio") #Hacer título
ventana.geometry("400x300") #Colocar las dimensiones

label = Label(ventana, text="¡Hola, Tkinter!") #Texto que saldrá
label.pack() #Se organiza automáticamente

label2 = Label(ventana, text="")
label2.pack

entrada = Entry(ventana) #Entrada de datos
entrada.pack() #Se organiza automáticamente

def saludar():
    label2 = Label(ventana, text=f"¡Hola, Harold!") #Texto que saldrá
    label2.place(x=100, y=150) #Se organiza automáticamente

boton = Button(ventana, text="Saludar", command=saludar) #Añadir botón
boton.pack()

ventana.mainloop() #Iniciar bucle principal