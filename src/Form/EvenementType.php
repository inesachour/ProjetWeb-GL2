<?php

namespace App\Form;

use App\Entity\Evenement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EvenementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('age_min')
            ->add('age_max')
            ->add('description')
            ->add('eco_friendly')
            ->add('name')
            ->add('photo')
            ->add('price_min')
            ->add('price_max')
            ->add('target')
            ->add('date')
            ->add('duration')
            ->add('link')
            ->add('number')
            ->add('user')
            ->add('Ajouter' , SubmitType::class ,[
                'attr'=>['label' =>'ADD']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Evenement::class,
        ]);
    }
}
