insert into tb_solicitacoes(servico, descricao_problema, dia, status, data_criacao, data_encerramento, nota)values('Pedreiro', 'Criar 2 comodos no fundo da casa', '2020/10/11 11:30:00', 'criado', '2021/11/20 12:20:30', '2021/10/13 15:10:50', 3);
insert into tb_solicitacoes(servico, descricao_problema, dia, status, data_criacao, data_encerramento, nota)values('Padeiro', 'caiu a parede do lado do barranco, precisa levantar outra mais forte', '2020/10/11 11:30:00', 'criado', '2021/11/20 12:20:30', '2021/10/13 15:10:50', 3);
insert into tb_solicitacoes(servico, descricao_problema, dia, status, data_criacao, data_encerramento, nota)values('Pisicologia', 'Querro... corre... não consigo', '2020/10/11 11:30:00', 'andamento', '2021/11/20 12:20:30', '2021/10/13 15:10:50', 3);
insert into tb_solicitacoes(servico, descricao_problema, dia, status, data_criacao, data_encerramento, nota)values('Demolição', 'Quero derrubar meu barraco aqui, está cheio de ratos, vou construir uma casa de tijolos no lugar', '2020/10/11 11:30:00', 'concluido', '2021/11/20 12:20:30', '2021/10/13 15:10:50', 3);
insert into tb_solicitacoes(servico, descricao_problema, dia, status, data_criacao, data_encerramento, nota)values('babá', 'Quero ver novela e a criança não deixar, alguem pode cuidar para mim?', '2020/10/11 11:30:00', 'concluido', '2021/11/20 12:20:30', '2021/10/13 15:10:50', 5);


insert into tb_usuario_solicitacoes(fk_id_usuario, fk_id_solicitacoes)values(1, 1);
insert into tb_usuario_solicitacoes(fk_id_usuario, fk_id_solicitacoes)values(2, 2);

insert into tb_usuario_solicitacoes(fk_id_usuario, fk_id_solicitacoes)values(1, 3);
insert into tb_usuario_solicitacoes(fk_id_usuario, fk_id_solicitacoes)values(3, 3);

insert into tb_usuario_solicitacoes(fk_id_usuario, fk_id_solicitacoes)values(2, 4);
insert into tb_usuario_solicitacoes(fk_id_usuario, fk_id_solicitacoes)values(3, 4);

insert into tb_usuario_solicitacoes(fk_id_usuario, fk_id_solicitacoes)values(1, 5);
insert into tb_usuario_solicitacoes(fk_id_usuario, fk_id_solicitacoes)values(3, 5);