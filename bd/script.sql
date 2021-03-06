USE [pilg1b]
GO
/****** Object:  Table [dbo].[Ciudad]    Script Date: 4/10/2021 21:35:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ciudad](
	[id_ciudad] [int] IDENTITY(100,1) NOT NULL,
	[nombre_ciudad] [varchar](50) NOT NULL,
	[idprovincia] [int] NOT NULL,
 CONSTRAINT [PK_Ciudad] PRIMARY KEY CLUSTERED 
(
	[id_ciudad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Clientes]    Script Date: 4/10/2021 21:35:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Clientes](
	[id_cliente] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[apellido] [varchar](50) NOT NULL,
	[fecnac] [date] NOT NULL,
	[domicilio] [varchar](50) NOT NULL,
	[pisodpto] [varchar](50) NOT NULL,
	[telefono] [varchar](50) NOT NULL,
	[cpostal] [varchar](14) NOT NULL,
	[cuil] [varchar](50) NOT NULL,
	[nombre_provinicia] [varchar](50) NOT NULL,
	[nombre_ciudad] [varchar](50) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[foto_dni_frente] [image] NULL,
	[foto_dni_reversa] [image] NULL,
	[password] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Cliente] PRIMARY KEY CLUSTERED 
(
	[id_cliente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cuenta]    Script Date: 4/10/2021 21:35:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cuenta](
	[id_cuenta] [varchar](50) NOT NULL,
	[alias] [varchar](50) NOT NULL,
	[cvu] [varchar](50) NOT NULL,
	[saldo] [money] NOT NULL,
	[cliente_id] [int] NOT NULL,
	[estado] [int] NOT NULL,
 CONSTRAINT [PK_Cuenta] PRIMARY KEY CLUSTERED 
(
	[id_cuenta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Provincia]    Script Date: 4/10/2021 21:35:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Provincia](
	[id_provincia] [int] IDENTITY(100,1) NOT NULL,
	[nombre_provincia] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Provincia] PRIMARY KEY CLUSTERED 
(
	[id_provincia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tipo_Transaccion]    Script Date: 4/10/2021 21:35:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tipo_Transaccion](
	[id_tipo_transaccion] [int] IDENTITY(100,1) NOT NULL,
	[descripcion] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Tipo_Transaccion] PRIMARY KEY CLUSTERED 
(
	[id_tipo_transaccion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Transaccion]    Script Date: 4/10/2021 21:35:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Transaccion](
	[id_transaccion] [int] IDENTITY(100,1) NOT NULL,
	[id_tipo] [int] NOT NULL,
	[fecha_transaccion] [datetime] NOT NULL,
	[monto] [money] NOT NULL,
	[numeroTarjeta] [varchar](50) NOT NULL,
	[numeroCVV] [varchar](50) NOT NULL,
	[cuenta_id] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Transaccion] PRIMARY KEY CLUSTERED 
(
	[id_transaccion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Ciudad]  WITH CHECK ADD  CONSTRAINT [FK_Ciudad_Provincia] FOREIGN KEY([idprovincia])
REFERENCES [dbo].[Provincia] ([id_provincia])
GO
ALTER TABLE [dbo].[Ciudad] CHECK CONSTRAINT [FK_Ciudad_Provincia]
GO
ALTER TABLE [dbo].[Cuenta]  WITH CHECK ADD  CONSTRAINT [FK_Cuenta_Clientes] FOREIGN KEY([cliente_id])
REFERENCES [dbo].[Clientes] ([id_cliente])
GO
ALTER TABLE [dbo].[Cuenta] CHECK CONSTRAINT [FK_Cuenta_Clientes]
GO
ALTER TABLE [dbo].[Transaccion]  WITH CHECK ADD  CONSTRAINT [FK_Transaccion_Cuenta] FOREIGN KEY([cuenta_id])
REFERENCES [dbo].[Cuenta] ([id_cuenta])
GO
ALTER TABLE [dbo].[Transaccion] CHECK CONSTRAINT [FK_Transaccion_Cuenta]
GO
ALTER TABLE [dbo].[Transaccion]  WITH CHECK ADD  CONSTRAINT [FK_Transaccion_Tipo_Transaccion] FOREIGN KEY([id_tipo])
REFERENCES [dbo].[Tipo_Transaccion] ([id_tipo_transaccion])
GO
ALTER TABLE [dbo].[Transaccion] CHECK CONSTRAINT [FK_Transaccion_Tipo_Transaccion]
GO
/****** Object:  StoredProcedure [dbo].[agregar_transacciones]    Script Date: 4/10/2021 21:35:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[agregar_transacciones]
@id_tipo int,
@fecha_transaccion datetime ,
@monto float,
@cuenta_id varchar,
@numeroTarjeta varchar(50),
@numeroCVV varchar(3)
AS
BEGIN
SET NOCOUNT ON
INSERT INTO Transaccion 
(id_tipo, fecha_transaccion, monto, cuenta_id, numeroTarjeta, numeroCVV)
VALUES 
(@id_tipo, @fecha_transaccion, @monto, @cuenta_id, @numeroTarjeta, @numeroCVV)

END
BEGIN
IF(@id_tipo = 101)
UPDATE Cuenta
SET saldo += @monto
WHERE @cuenta_id = id_cuenta
ELSE
UPDATE Cuenta
SET saldo -= @monto
WHERE @cuenta_id = id_cuenta

END
GO
/****** Object:  StoredProcedure [dbo].[SP_ValidarCliente]    Script Date: 4/10/2021 21:35:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[SP_ValidarCliente]
@Email varchar (50),
@Password varchar (50)

as
begin
select*from Clientes where Email=@Email and Password=@Password
End
GO
