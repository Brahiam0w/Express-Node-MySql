import * as Lectura from '../models/lecturaModel.js';
import * as Usuario from '../models/usuarioModel.js';
import * as Pago from '../models/pagoModel.js';
import { generarLecturaDiaria, generarLecturaPrincipal } from '../utils/ia.js';

export const crearPrincipal = async (req,res) => {
  try{
    const usuario = await Usuario.getUsuarioById(req.params.usuario_id);
    if(!usuario) return res.status(404).json({error:'Usuario no encontrado'});
    const existe = await Lectura.existsPrincipal(req.params.usuario_id);
    if(existe) return res.status(400).json({error:'La lectura principal ya fue generada para este usuario'});
    const contenido = generarLecturaPrincipal(usuario.fecha_nacimiento, usuario.nombre);
    const id = await Lectura.createLectura({usuario_id:req.params.usuario_id, tipo:'principal', contenido});
    const lectura = await Lectura.getLecturaById(id);
    res.status(201).json(lectura);
  }catch(err){
    res.status(500).json({error: err.message});
  }
};

export const crearDiaria = async (req,res) => {
  try{
    const usuario = await Usuario.getUsuarioById(req.params.usuario_id);
    if(!usuario) return res.status(404).json({error:'Usuario no encontrado'});
    const estado = usuario.estado;
    if(estado !== 'activo') return res.status(403).json({error:'Usuario no activo. Membresía requerida.'});
    const contenido = generarLecturaDiaria(usuario.nombre);
    const id = await Lectura.createLectura({usuario_id:req.params.usuario_id, tipo:'diaria', contenido});
    const lectura = await Lectura.getLecturaById(id);
    res.status(201).json(lectura);
  }catch(err){
    res.status(500).json({error: err.message});
  }
};

export const listarPorUsuario = async (req,res) => {
  try{
    const lecturas = await Lectura.getLecturasByUsuario(req.params.usuario_id);
    res.json(lecturas);
  }catch(err){
    res.status(500).json({error: err.message});
  }
};

export const obtenerLectura = async (req,res) => {
  try{
    const lectura = await Lectura.getLecturaById(req.params.id);
    if(!lectura) return res.status(404).json({error:'Lectura no encontrada'});
    res.json(lectura);
  }catch(err){
    res.status(500).json({error: err.message});
  }
};
