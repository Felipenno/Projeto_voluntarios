use db_voluntarios;

insert into tb_usuario(nome, email, senha, cpf, telefone, tipo)values('joaquim', 'joaquim@joaquim', 'joaquimjoaquim', '135.478.197-02', '(15) 1235-8564', 'v');
insert into tb_usuario(nome, email, senha, cpf, telefone, tipo)values('maria', 'maria@maria', 'mariamaria', '035.578.157-02', '(15) 7035-8564', 's');

insert into tb_solicitacoes(servico, descricao_problema, dia, status, data_criacao, data_encerramento, nota)values('Pedreiro', 'caiu a parede', '2020/10/11 11:30:00', 'Concluido', '2021/11/20 12:20:30', '2021/10/13 15:10:50', 3);

insert into tb_usuario_solicitacoes(fk_id_usuario, fk_id_solicitacoes)values(1, 1);
insert into tb_usuario_solicitacoes(fk_id_usuario, fk_id_solicitacoes)values(2, 1);

insert into tb_endereco(fk_id_usuario, cep, estado, cidade, bairro, rua, numero, complemento)values(1, '44562-235', 'Bahia', 'jordin', 'joaquima','Rua joaquim', 11, 'bloco 12' );
insert into tb_endereco(fk_id_usuario, cep, estado, cidade, bairro, rua, numero, complemento)values(1, '44542-235', 'São Paulo', 'São Paulo', 'joaquima','Rua joaquim', 13, '' );

insert into TB_VOLUNTARIO(fk_id_usuario, servico, descricao_servico, avaliacao)values(1, 'Reforma', 'Um bom pedreiro top', 4);
