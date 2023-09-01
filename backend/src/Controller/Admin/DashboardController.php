<?php

namespace App\Controller\Admin;

use App\Entity\Blog;
use App\Entity\Comment;
use App\Entity\Contact;
use App\Entity\Home;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\UserMenu;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\Security\Core\User\UserInterface;

class DashboardController extends AbstractDashboardController
{
    private $adminUrlGenerator;

    public function __construct(AdminUrlGenerator $adminUrlGenerator)
    {
        $this->adminUrlGenerator = $adminUrlGenerator;
    }

    #[Route('/super-admin', name: 'super_admin')]
    public function index(): Response
    {
        //return parent::index();

        // Option 1. You can make your dashboard redirect to some common page of your backend
        //
        if($this->getUser()){
            $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);
            return $this->redirect($adminUrlGenerator->setController(UserCrudController::class)->generateUrl());
    
            // Option 2. You can make your dashboard redirect to different pages depending on the user
            //
            // if ('jane' === $this->getUser()->getUsername()) {
            //     return $this->redirect('...');
            // }
    
            // Option 3. You can render some custom template to display a proper dashboard with widgets, etc.
            // (tip: it's easier if your template extends from @EasyAdmin/page/content.html.twig)
            //
            // return $this->render('some/path/my-dashboard.html.twig');
        }else{
            return $this->redirectToRoute('app_login');
        }
       
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Backend');
    }

    public function configureMenuItems(): iterable
    {
        return [
            MenuItem::linkToDashboard('Dashboard', 'fa fa-home'),
            MenuItem::linkToCrud('User', 'fas fa-user', User::class),
            // MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class),
            MenuItem::linkToCrud('Blogues', 'fas fa-file-text', Blog::class),
            MenuItem::linkToCrud('Comment', 'fas fa-comments', Comment::class),
            MenuItem::subMenu('Pages', 'fas fa-file')->setSubItems([
                MenuItem::linkToCrud('Home', 'fa fa-home', Home::class),
                MenuItem::linkToCrud('Contact', 'fa fa-contact', Contact::class)
            ])
        ];
        
    }
    public function configureActions(): Actions
    {
        return parent::configureActions()
            ->add(Crud::PAGE_INDEX, Action::DETAIL)
        ;
    }
    public function configureUserMenu(UserInterface $user): UserMenu
    {
        if(!$user instanceof User){
            throw new \Exception("Ce n'est pas une instance de la classe User");
        }
        $userToShowUser = $this->adminUrlGenerator
            ->setController(UserCrudController::class)
            ->setAction(Action::DETAIL)
            ->setEntityId($user->getId())
            ->generateUrl()
        ;
        return parent::configureUserMenu($user)
            ->setAvatarUrl('/uploads/images/users/avatars/'.$user->getAvatarImage())
            ->setMenuItems([
                MenuItem::linkToUrl('My Profile', 'fas fa-user', $userToShowUser)
            ])

        ;
    }
    
}
