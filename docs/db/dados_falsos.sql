-- -- Adicionando SuperUsers
-- INSERT INTO techpassdb.superUser (email, senha, nome, nascimento, cpf)
-- VALUES
--   ('gerente@techpass.com', 'senha123', 'Gerente', '1990-01-01', '123.456.789-01'),
--   ('supervisor@techpass.com', 'senha456', 'Supervisor', '1985-05-15', '987.654.321-02'),
--   ('coordenador@techpass.com', 'senha789', 'Coordenador', '1980-10-30', '111.222.333-03');

-- -- Obtendo os IDs dos SuperUsers inseridos
-- SET @gerente_id = LAST_INSERT_ID();
-- SET @supervisor_id = @gerente_id + 1;
-- SET @coordenador_id = @supervisor_id + 1;

-- -- Adicionando Contas de Administrador (ADM)
-- INSERT INTO techpassdb.ADM (superUser_id, telefone, cargo)
-- VALUES
--   (@gerente_id, '123456789', 'Gerente'),
--   (@supervisor_id, '987654321', 'Supervisor'),
--   (@coordenador_id, '111222333', 'Coordenador');
