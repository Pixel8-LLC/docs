export interface State {
  mobileMenu: boolean;
  activeSlug: string;
  slugInView?: string;
  setState: (value: any) => void;
  locale: string;
  routes: any;
  searchModal: 'open' | 'closed';
}
