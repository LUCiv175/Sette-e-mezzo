<?php
class Carta{
    public $immagine;
    public $valore;
    public $isEstratto;

    /**
     * @param $immagine
     * @param $valore
     */
    public function __construct($immagine, $valore)
    {
        $this->immagine = $immagine;
        $this->valore = $valore;
    }

}